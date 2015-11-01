# Project statement

Unlike more general of our libraries (like
[compojure-api](https://github.com/metosin/compojure-api) and
[ring-swagger](https://github.com/metosin/ring-swagger)) this project is
primarily intended for use in Metosin's projects. Feel free to use, but
don't expect full support.

- We might remove features if we think they are not useful anymore
- We will reject PRs and issues about features we wouldn't use ourselves

## Making changes

- Fork the repository on Github
- Create a topic branch from where you want to base your work (usually the master branch)
- Check the formatting rules from existing code (no trailing whitepace, mostly default indentation)
- Ensure any new code is well-tested, and if possible, any issue fixed is covered by one or more new tests
- Verify that all tests pass using `lein midje`
- Push your code to your fork of the repository
- Make a Pull Request
