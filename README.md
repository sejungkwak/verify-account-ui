# Verify Account UI

![screen recording](https://media.giphy.com/media/FK3J26ejWl1ak4fxtx/giphy.gif)

#### project notes

1. HTML

- container
- h1: Verify Your Account
- p: We emailed you the six digit code to youraddress@email.com <br> Enter the code below to confirm your email address.
- six input boxes - placeholder="0"
- button: confirm

2. CSS

- when filled: box shadow, outline

3. JavaScript

- focus()
- when input, cursor goes to the next box
- when backspace, cursor goes to the previous box

- Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML

- for the number input min=0 and max=9

2. CSS

- container: max-width
- code:valid - when number input filled
- @media

3. JavaScript

- use e.key if ( e.key >= 0 && e.key <=9 )

```
codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if ( e.key >= 0 && e.key <= 9 ) {
      codes[idx].value = '';
      setTimeout(() => code[idx + 1].focus(), 10)
    } else if ( e.key === 'Backspace' ) {
      setTimeout(() => code[idx - 1].focus(), 10)
    }
  })
})
```
