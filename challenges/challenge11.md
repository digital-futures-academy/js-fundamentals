### Details

Finally! Let's make our ciphers available to anyone who wants to communicate with us!


You'll need to
- create an account at [npmjs](https://www.npmjs.com/signup)
- [package a library of code and publish it to the NPM Registry](https://docs.npmjs.com/packages-and-modules)
- handle invalid commands and arguments and provide useful error messages
- handle invalid character sets and provide useful error messages
- create a runnable command when installing the package

### Acceptance criteria

For a trainee named `Ed` in a cohort named `mse-2103-a`

one possible implementation:
```sh
$ npm install cipherworld-ed-mse-2103-a
$ cipher -charset character_set2.txt -m ll -e example.txt
$ cipher -charset character_set2.txt -m ll -d example.txt.enc
$ cipher -charset character_set1.txt -m ln -e example.txt -k 123
$ cipher -charset character_set1.txt -m ln -d example.txt.enc -k 123
```

You might want to try different approaches - feel free to do so. Document your approach and share it with a coach when you do!
