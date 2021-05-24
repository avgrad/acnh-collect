# ACNH Collect

A simple web app with a checklist for all insects, fish and fossils in Animal Crossing New Horizons.

Your data is saved only locally within your browser, therefore no account is needed, but your progress is only saved on that device.

### Development

- run dev server using `yarn start`
- optimized build using `yarn build`
- deploy to gh-pages `yarn version` (automatically builds and commits, push using `git push --tags`)

### Update Collection Data

To download updated collection data from ACNHApi to `src/data/` run `yarn update-data`.

For art pieces, info about how to spot fakes is injected.

(this step it is not included in the build process automatically, the data update is supposed to be manual)
