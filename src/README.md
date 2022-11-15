# pets.ripl.org

## Adding pets

Create an entry for the desired pet in `public/pets.json`.

If possible, include an image that summaries the pet in `public/images/`. The filename should be included as the `image` property in the JSON entry.

To resize and optimize the size of the image file using the `tinify` library, set your Tinify API key in the `TINIFY_KEY` environment variable and run:

    python ./util/optimize-image.py ./public/images/{filename}.{png|jpg}

This will resize and optimze the file inplace.

## Deploying to production

To rebuild and deploy the entire site after making updates to the JSON, iamges, or the React app, use:

    yarn build
    ...
    .....
	.......
