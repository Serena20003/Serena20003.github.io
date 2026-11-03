# Hi! Thank you for checking out my personal website!

Some sub pages made with html include

- `/iml300` with my Digital Interactive Art class projects
- `/Game--` with my C++ Game Development class projects
- I'm still working on experience/project detail pages - more coming soon!

# Used Resources

https://github.com/gitname/react-gh-pages?tab=readme-ov-file

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Future Watch-out

p5-wrapper only compatible with react18.

## This is a React App!

Production version of the app is in the `build` folder, and source code is in `src`.

## GitHub Pages deployment

The site follows the [react-gh-pages setup](https://github.com/gitname/react-gh-pages)
using the `gh-pages` package. From `serena-page`, run `npm ci` once, then
`npm run deploy` to build and publish the build files to the `gh-pages` branch.
The `predeploy` script runs the production build automatically.

The workflow in `.github/workflows/deploy-pages.yml` runs this same deployment
automatically when site changes reach `main`. It can also be run from the
Actions tab on `main`. It uses the repository's `GITHUB_TOKEN`; no personal
access token is required. The workflow also uploads and deploys the same build
with GitHub's Pages actions because
[pushes made with `GITHUB_TOKEN` do not trigger a Pages build](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

For automatic deployment, select **GitHub Actions** in the repository's
**Settings → Pages → Build and deployment → Source**, then merge the workflow
and site changes into `main`. GitHub serves the published build at
<https://Serena20003.github.io>.

For manual deployment using only `npm run deploy`, select **Deploy from a
branch**, then **gh-pages** and **/ (root)** instead.
