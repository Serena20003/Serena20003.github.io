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

describe('recruiting-first portfolio experience', () => {
  test('homepage leads with a recruiting-focused headline and core sections', () => {
    __setMockPathname('/');
    render(<App />);

    expect(
      screen.getByText(/product-minded software engineer/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /view resume/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/^Experience$/i)
    ).toBeInTheDocument();
  });

  test('homepage highlights current experience cards', () => {
    __setMockPathname('/');
    render(<App />);

    const experienceHeading = screen.getByText(/^Experience$/i);
    const experienceSection = experienceHeading.closest('section');

    expect(experienceSection).not.toBeNull();
    expect(within(experienceSection).getByText(/Optivide/i)).toBeInTheDocument();
    expect(within(experienceSection).getByText(/ENXTI/i)).toBeInTheDocument();
    expect(within(experienceSection).getByText(/TourScout/i)).toBeInTheDocument();
  });

  test('work detail route renders the case-study structure', () => {
    __setMockPathname('/work/optivide');
    render(<App />);

    expect(screen.getByText(/^Context$/i)).toBeInTheDocument();
    expect(screen.getByText(/what i owned/i)).toBeInTheDocument();
    expect(screen.getByText(/technical approach/i)).toBeInTheDocument();
    expect(screen.getByText(/^Outcome$/i)).toBeInTheDocument();
  });

  test('work detail route renders a public-image gallery before the writeup in a horizontal carousel', () => {
    __setMockPathname('/work/optivide');
    render(<App />);

    const galleryHeading = screen.getByRole('heading', { name: /gallery/i });
    const contextHeading = screen.getByRole('heading', { name: /^context$/i });
    const carousel = screen.getByLabelText(/case study gallery/i);

    const galleryImages = [
      screen.getByAltText(/Optivide identity graphic/i),
      screen.getByAltText(/Serena presenting research at SSI/i),
    ];

    expect(
      galleryHeading.compareDocumentPosition(contextHeading) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
    expect(carousel).toHaveClass('detail-gallery-carousel');

    galleryImages.forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy');
      expect(image).toHaveAttribute('decoding', 'async');
    });
  });

  test('contact area removes the site rating form in favor of direct recruiting actions', () => {
    __setMockPathname('/');
    render(<App />);

    expect(
      screen.queryByText(/leave a rating for my website/i)
    ).not.toBeInTheDocument();
    expect(screen.getByText(/reach out if you'd like to chat/i)).toBeInTheDocument();
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
