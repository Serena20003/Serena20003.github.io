import React from 'react';
import { parse as parseYaml } from 'yaml';

const FRONTMATTER_PATTERN = /^---\s*\n([\s\S]*?)\n---\s*\n?/;

const parseFrontmatter = (source = '') => {
  const match = source.match(FRONTMATTER_PATTERN);

  if (!match) {
    return { metadata: {}, body: source.trim() };
  }

  try {
    return {
      metadata: parseYaml(match[1]) || {},
      body: source.slice(match[0].length).trim(),
    };
  } catch (error) {
    return { metadata: {}, body: source.slice(match[0].length).trim() };
  }
};

const isBlankLine = (line) => line.trim() === '';
const isFence = (line) => line.trim().startsWith('```');
const isHeading = (line) => /^#{1,6}\s+/.test(line);
const isBlockquote = (line) => line.trim().startsWith('>');
const isUnorderedList = (line) => /^[-*]\s+/.test(line.trim());
const isOrderedList = (line) => /^\d+\.\s+/.test(line.trim());
const isRule = (line) => /^([-*_])(?:\s*\1){2,}\s*$/.test(line.trim());
const isStandaloneImage = (line) =>
  /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)\s*$/.test(line.trim());

const renderInline = (text, keyPrefix) => {
  const tokens = [];
  const pattern =
    /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*)/g;
  let cursor = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      tokens.push(text.slice(cursor, match.index));
    }

    if (match[2] && match[3]) {
      const href = match[3];
      tokens.push(
        <a
          href={href}
          key={`${keyPrefix}-link-${match.index}`}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
        >
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      tokens.push(
        <strong key={`${keyPrefix}-strong-${match.index}`}>{match[4]}</strong>
      );
    } else if (match[5]) {
      tokens.push(
        <code key={`${keyPrefix}-code-${match.index}`}>{match[5]}</code>
      );
    } else if (match[6]) {
      tokens.push(<em key={`${keyPrefix}-em-${match.index}`}>{match[6]}</em>);
    }

    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    tokens.push(text.slice(cursor));
  }

  return tokens;
};

const parseMarkdownBlocks = (markdown = '') => {
  const lines = markdown.split('\n');
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (isBlankLine(line)) {
      index += 1;
      continue;
    }

    if (isFence(line)) {
      const language = line.trim().slice(3).trim();
      const content = [];
      index += 1;

      while (index < lines.length && !isFence(lines[index])) {
        content.push(lines[index]);
        index += 1;
      }

      if (index < lines.length) {
        index += 1;
      }

      blocks.push({
        type: 'code',
        language,
        content: content.join('\n'),
      });
      continue;
    }

    if (isHeading(line)) {
      const [, hashes, content] = line.match(/^(#{1,6})\s+(.*)$/);
      blocks.push({
        type: 'heading',
        level: hashes.length,
        content: content.trim(),
      });
      index += 1;
      continue;
    }

    if (isBlockquote(line)) {
      const content = [];

      while (index < lines.length && isBlockquote(lines[index])) {
        content.push(lines[index].replace(/^>\s?/, '').trim());
        index += 1;
      }

      blocks.push({
        type: 'blockquote',
        content: content.join(' '),
      });
      continue;
    }

    if (isUnorderedList(line) || isOrderedList(line)) {
      const ordered = isOrderedList(line);
      const items = [];

      while (index < lines.length) {
        const current = lines[index].trim();
        const matchesCurrentList = ordered
          ? isOrderedList(current)
          : isUnorderedList(current);

        if (!matchesCurrentList) {
          break;
        }

        items.push(current.replace(ordered ? /^\d+\.\s+/ : /^[-*]\s+/, '').trim());
        index += 1;
      }

      blocks.push({
        type: ordered ? 'ordered-list' : 'unordered-list',
        items,
      });
      continue;
    }

    if (isRule(line)) {
      blocks.push({ type: 'rule' });
      index += 1;
      continue;
    }

    if (isStandaloneImage(line)) {
      const [, alt, src, title] = line
        .trim()
        .match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)\s*$/);

      blocks.push({
        type: 'image',
        alt,
        src,
        title,
      });
      index += 1;
      continue;
    }

    const paragraph = [];

    while (index < lines.length) {
      const current = lines[index];

      if (
        isBlankLine(current) ||
        isFence(current) ||
        isHeading(current) ||
        isBlockquote(current) ||
        isUnorderedList(current) ||
        isOrderedList(current) ||
        isRule(current) ||
        isStandaloneImage(current)
      ) {
        break;
      }

      paragraph.push(current.trim());
      index += 1;
    }

    blocks.push({
      type: 'paragraph',
      content: paragraph.join(' '),
    });
  }

  return blocks;
};

export const parseCaseStudyDocument = (source = '') => {
  const { metadata, body } = parseFrontmatter(source);

  return {
    metadata,
    body,
    blocks: parseMarkdownBlocks(body),
  };
};

export const buildLegacyCaseStudyDocument = (work) => {
  if (!work || !work.caseStudy) {
    return null;
  }

  const sections = [
    ['Context', work.caseStudy.context],
    ['What I owned', work.caseStudy.owned],
    ['Constraints', work.caseStudy.constraints],
    ['Technical approach', work.caseStudy.technicalApproach],
    ['Outcome', work.caseStudy.outcome],
  ].filter(([, content]) => content);

  return {
    metadata: {},
    body: '',
    blocks: sections.flatMap(([title, content]) => [
      { type: 'heading', level: 2, content: title },
      { type: 'paragraph', content },
    ]),
  };
};

export const renderMarkdownBlocks = (blocks = []) =>
  blocks.map((block, index) => {
    const key = `${block.type}-${index}`;

    if (block.type === 'heading') {
      const Tag = `h${Math.min(Math.max(block.level, 1), 6)}`;
      return <Tag key={key}>{renderInline(block.content, key)}</Tag>;
    }

    if (block.type === 'paragraph') {
      return <p key={key}>{renderInline(block.content, key)}</p>;
    }

    if (block.type === 'blockquote') {
      return (
        <blockquote key={key}>
          <p>{renderInline(block.content, key)}</p>
        </blockquote>
      );
    }

    if (block.type === 'unordered-list') {
      return (
        <ul key={key}>
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ul>
      );
    }

    if (block.type === 'ordered-list') {
      return (
        <ol key={key}>
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ol>
      );
    }

    if (block.type === 'code') {
      return (
        <pre key={key}>
          <code className={block.language ? `language-${block.language}` : undefined}>
            {block.content}
          </code>
        </pre>
      );
    }

    if (block.type === 'rule') {
      return <hr key={key} className="case-study-rule" />;
    }

    if (block.type === 'image') {
      return (
        <figure key={key} className="case-study-media">
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            decoding="async"
          />
          {block.title || block.alt ? (
            <figcaption>{block.title || block.alt}</figcaption>
          ) : null}
        </figure>
      );
    }

    return null;
  });
