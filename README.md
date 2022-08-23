This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Things to Improve

Here is a list of things that could be improved if more time was put into developing the project.

#### Using Next Image for images

- Currently images are displayed with a simple image tag. An improved way to do this would be to implement using `next/image` components.

#### API key should be made an environment variable

- The API key should be abstracted into an environment variable for security

#### Abstracting regex for finding the year

- The regex that is currently used for scoping the search could be expanded to feature other ways of scoping and abstracted for use in other places

#### Styling

- The styling could be improved for visually to be more engaging.
- It's currently hardcoded throughout the project but would benefit from using a theme file
- The project would further benefit from abstracting repeated styling into 'Atoms' for reuse. For example 'Headings'.
- Helpers for handling media queries could be added to make it easier to maintain responsive site design going forward.

#### Serverside rendering using nextjs functions

- The project is currently only using client side rendering. There could be benefits to server side rendering.

#### Analysing and reducing re-renders to improve performance

- No time has been put into improving the performance. There may be places where things like re-renders could be reduced.

#### Adding the ability to filter search results

- Once search results are shown there is currently no way to filter them. With more time it would be good to be able to filter the results.

#### Pagination for search results and top movies

- We're currently only showing the first page of results for both Top movies and search results. It would be good to introduce pagination and allow the user to view all the options.

#### Further content on movie show pages

- The movie pages currently show very limited content. Making use of all of the available data would potentially provide the user with more value.

#### Formatting of dates using something like dayjs or date-fns

- Dates are currently displayed exactly as they come back from the API. There might be benefit in displaying dates in different formats using libraries like dayjs or date-fns.

#### Further testing to improve coverage

- I have tried to include a variety of tests. Some call API's others are basic unit tests and some are just basic integration tests looking for UI elements that are important to the user experience. The coverage is far from complete and there are many more tests that could be added to improve coverage.

#### Error Handling

- The site currently only handles best case scenarios and doesn't account for errors from API's or from user behaviour. More time should be given to handling the edge cases.

#### Guarding against optional Movie api values

- The Movie object returned from the API has all optional values. These should be guarded against and the UI updated to handle when values aren't present.

#### Navigation

- There is currently no navigation bar and the site would benefit from having one added when there are more pages to navigate between.

#### Loading states

- The site would benefit from having loading states to display to the user when data is being fetched. I started to implement these using the redux entity and loading model and these would simply need to be added as additional reducers and then implemented in the UI.

#### Casting of Types

- There are two places where I have cast the types. It would be better to go through and spend the time properly typing these instances.

Still to do

- Test the API request with a mock
