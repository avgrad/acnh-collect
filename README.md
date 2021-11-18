# ACNH Collect

A simple web app with a checklist for collectibles in Animal Crossing New Horizons.

- Fish
- Insects
- Sea Creatures
- Fossils
- Art Pieces
- KK Slider Songs
- Gyroids

Your data is saved only locally within your browser, therefore no account is needed, but your progress is only saved on that device.

### Development

- run dev server using `npm run start`
- optimized build using `npm run build`
- deploy to gh-pages `npm version` (automatically builds and commits, push using `git push --tags`)

### Update Collection Data

To download updated collection data from ACNHApi to `src/data/` run `npm run update-data`.

For art pieces, info about how to spot fakes is injected.

ACNHAPI currently does not have data for gyroids. That data file is created manually.

Also, the new KK Songs from Update 2.0.0 are added manually, which has to be considered if ACNHAPI gets updated.

(this step it is not included in the build process automatically, the data update is supposed to be manual)
