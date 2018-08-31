# Automated Testing Decisions

1. Frameworks
2. Assertion Libraries
3. Helper Libraries
4. Where to run tests?
5. WHere to place tests?
6. When to run tests?

## 1. Frameworks
 * Jest
      1. Fast
      2. Snapshot testing
      3. Console.log
      4. Coverage support
      5. No configuration
      6. Built in create-react-app
 * Mocha

### UI Testing Types
- Unit
    1. Testing small modules
    2. Business business logic
        - Validation
        - Calculations
        - Transformations
    3. Individual Modules/functions
- Interaction
    1. Confirm interactions work
    2. Asset a function is called on click
    3. Message displays upon submission
    4. No browser required
    5. When to interactive Test?
      - Interactive component
      - Validate events
      - Non-deterministic markup
- Structural
  1. Gaol Validate HTML output
  2. Save copy of output for a given input
  3. Test break when output changed
  4. The only test needed if stateless
  5. When to Snapshot Test
    - Non-interactive component
    - Deterministic markup
    - Validate display/hiding
    - Test display after interactions
- Style
  1. Goal: Automated visual regression testing
    - Compare literal screenshots
    - BackstopJS, PhantomCSS, Casper

## 2. Assertion Library
### What's an Assertion?
 - Declare what you expect:
    * expect ( 2+2 ).toEqual( 4 )
- Use assertion libraries like Chai.
## 3. Helper Library
### Enzyme
- Interactive tests
- Simulate clicks
- DOM queries
### react-test-render
- Render Jest Snapshots
## 4. Where to run tests
- Browser
    * Karma, Testem
- Headless Browser
    * PhantomJS
    * Headless Chrome (look into)
- In-memory DOM
    * JSDOM
## 5. Where to place tests
- Where Do Test Files Belong?
    * Centralized
        1. Less "noise" in src folder
    * Alongside
        1. Easy imports
        2. Clear visibility
        3. Convenient to open
        4. No recreating folder structure
        5. Easy file moves
## 6. When to run tests
- Run Tests When You Hit Save
    * Why ?
        - Rapid feedback
        - Facilitates TDD
        - Automatic = Low friction
# Plan

1. Frameworks
    - Jest
2. Assertion Libraries
    - Jest
3. Helper Libraries
    - Enzyme
4. Where to run tests?
    - Node
5. WHere to place tests?
    - Alongside
6. When to run tests?
    - Upon save

# Continuous Integration
- Forgot to commit new file
- Forgot to update package.json
- Commit does not run cross-platform
- Node version conflicts
- Did not run tests
- Bad merge

## Can do:
- Run Automated Build
- Run your tests
- Check code coverage
- Automate deployment

## Servers
- Travis
- Appveyor
- Jenkins
