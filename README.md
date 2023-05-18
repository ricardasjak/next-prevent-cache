## Bug description

Nextjs `Link` component causes soft navigation and user may be presented with outdated page.
This repo illustrates such problem in very simplified way.

## Expected behaviour
Prior Nextjs v13.3.1 this would have worked as expected `<Link prefeth={false} href="..">...</Link>` would revalidate page data.
