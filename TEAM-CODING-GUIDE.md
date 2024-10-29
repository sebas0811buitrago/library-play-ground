# -----TEAM CODING GUIDE------

# Forms

for handling react forms use [react-hook-form](https://react-hook-form.com/),
for the rules validations use the functions available in `src/tools/formValidationRules.ts` if you don't find
any rules that meet your need you can create a new one that follows react hook form custom validations estructure

# Data fetching in React components

For data fetching you are using SWR, this library gives us the following features:
[SWR](https://swr.vercel.app/docs/getting-started)

- Optimistic updates
- Built-in cache and request deduplication
- Global state of cache
- Mutations
- It is possible to use it with any component, except when you are using serverside aggrid, because it has it's own handler

# Typescript Naming convention

Watch this video for more tips [How to Name your Types](https://www.youtube.com/watch?v=qA65QjWCl60&t=177s)

- UsePascalCase for example if the function it is called sumOfIntegers its interface should be SumOfIntegers
- For React Components use the name of the component and add props at then end For example: `ButtonProps`
- Don't use I or T prefixes for your types
- For generic types don't use letters like U or T, rather use names like `TData` or `UFilters`, the first letter will indicate that it is a generic type and the other word will indicate a description of the type

# Good code practices

- Try to follow SOLID principle as long as it is possible
- Watch the following video:[This is the Only Right Way to Write React clean-code - SOLID](https://www.youtube.com/watch?v=MSq_DCRxOxw)
