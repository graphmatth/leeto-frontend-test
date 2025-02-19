# Leeto technical frontend test

## Tech Stack

- React
- TypeScript
- TanStack Router
- Tailwind CSS
- Vitest & Testing Library
- Storybook
- Zod
- Biome

## Project Structure

```
/src
 ├── components/      # Reusable UI components
 ├── modules/         # Feature-based modules
 ├── utils/           # Utility functions
 ├── routes/          # App routing
 ├── main.tsx         # Entry point
 └── ...
```

### Setup & Installation

1. Clone the repository:

```bash
git clone git@github.com:graphmatth/leeto-frontend-test.git
cd leeto-frontend-test
```

2. Install dependencies:

```bash
yarn
```

3. Start the development server:
   You might also need to run a `yarn` command inside the client folder before

```bash
yarn start
```

If you encounter issues running the project, make sure to install dependencies inside the client folder as well:

```bash
cd client && yarn
```

4. Run unit tests:

```bash
yarn test
```

5. StoryBook
```bash
yarn storybook
```

6. Hire me 😇😁

## Planned evolution

- Add more unit tests
- Implement end-to-end and visual testing
- Enhance the Storybook documentation
- Improve icon management by using a dedicated, strongly typed Icon component instead of directly importing icons from the [react-icons](https://react-icons.github.io/react-icons/) package

## Additional Notes

**State of the card**

Some cards have an `active` status but are actually `archived` due to an expired date. I chose not to apply an additional filter on the frontend because in my opinion this issue should be resolved before the data reaches the frontend.

**id type**

I’m not sure if this is intentional, but the id field in the [GiftCard](https://github.com/leclan/leeto-front-end-technical-test?tab=readme-ov-file#types) type is incorrectly typed. It is currently a string instead of a number.

**Emoji**

I decided to keep emojis in their native format rather than converting them into images. It’s important to keep in mind that emojis may appear differently depending on the OS. Additionally, if we want to use only Apple-style emojis, we may face copyright restrictions.
