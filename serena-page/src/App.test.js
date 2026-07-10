import { render, screen, within } from '@testing-library/react';
import App from './App';

jest.mock(
  'react-router-dom',
  () => {
    const React = require('react');
    let mockPathname = '/';

    return {
      __setMockPathname: (pathname) => {
        mockPathname = pathname;
      },
      BrowserRouter: ({ children }) => <>{children}</>,
      HashRouter: ({ children }) => <>{children}</>,
      Routes: ({ children }) => {
        const route = React.Children.toArray(children).find((child) => {
          const { path } = child.props;
          if (path === mockPathname) {
            return true;
          }

          if (path && path.includes(':') && mockPathname.startsWith('/work/')) {
            return true;
          }

          return false;
        });

        return route ? route.props.element : null;
      },
      Route: ({ element }) => element,
      Link: ({ to, children, ...props }) => (
        <a href={to} {...props}>
          {children}
        </a>
      ),
      useLocation: () => ({ pathname: mockPathname }),
      useParams: () => ({ slug: mockPathname.split('/').pop() }),
    };
  },
  { virtual: true }
);

jest.mock('./supabase-client', () => ({
  supabase: {
    from: () => ({
      insert: () => ({
        single: async () => ({ error: null }),
      }),
    }),
  },
}));

const { __setMockPathname } = require('react-router-dom');

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    if (String(url).includes('/case-studies/optivide.md')) {
      return Promise.resolve({
        ok: true,
        text: async () => `---
title: Optivide
summary: A markdown-backed case study example.
date: May 2026 - Present
tags:
  - React Native
  - Express
heroImage: /other_things_images/ssi.webp
links:
  - label: View Resume
    url: /resume.pdf
---

# Overview

Optivide is now rendered from a markdown file instead of hardcoded case-study cards.

> This body should stay flexible so images, callouts, and custom sections are easy to add.

![Process screenshot](/other_things_images/ssi.webp)
`,
      });
    }

    return Promise.resolve({
      ok: false,
      text: async () => '',
    });
  });
});

describe('recruiting-first portfolio experience', () => {
  test('homepage leads with a recruiting-focused headline and featured work', () => {
    __setMockPathname('/');
    render(<App />);

    expect(
      screen.getByText(/product-minded software engineer/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /view resume/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /view featured work/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /featured work/i })
    ).toBeInTheDocument();
  });

  test('homepage highlights current featured case studies', () => {
    __setMockPathname('/');
    render(<App />);

    const featuredHeading = screen.getByRole('heading', { name: /featured work/i });
    const featuredRegion = featuredHeading.closest('section');

    expect(featuredRegion).not.toBeNull();
    expect(within(featuredRegion).getByText(/Optivide/i)).toBeInTheDocument();
    expect(within(featuredRegion).getByText(/ENXTI/i)).toBeInTheDocument();
    expect(within(featuredRegion).getByText(/TourScout/i)).toBeInTheDocument();
  });

  test('work detail route renders markdown-driven case study content', async () => {
    __setMockPathname('/work/optivide');
    render(<App />);

    expect(await screen.findByRole('heading', { name: /^Optivide$/i })).toBeInTheDocument();
    expect(screen.getByText(/markdown-backed case study example/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /overview/i })).toBeInTheDocument();
    expect(
      screen.getByText(/rendered from a markdown file instead of hardcoded case-study cards/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(/Process screenshot/i)).toBeInTheDocument();
  });

  test('contact area removes the site rating form in favor of direct recruiting actions', () => {
    __setMockPathname('/');
    render(<App />);

    expect(
      screen.queryByText(/leave a rating for my website/i)
    ).not.toBeInTheDocument();
    expect(screen.getByText(/currently seeking/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });

  test('below-the-fold images are marked for lazy loading', () => {
    __setMockPathname('/');
    render(<App />);

    screen.getAllByAltText(/TourScout/i).forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy');
      expect(image).toHaveAttribute('decoding', 'async');
    });
    expect(screen.getByAltText(/Guitarist/i)).toHaveAttribute('loading', 'lazy');
    expect(screen.getByAltText(/Guitarist/i)).toHaveAttribute('decoding', 'async');
  });
});
