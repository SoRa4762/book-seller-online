so when ever you are using tailwind and you want to add things that tailwind doesnt have currently on its config
just set its mode to jit,

=> mode: "jit" [aka, just in time compilation]

then you can use things like

=> m-[-50vw] || w-[50vw]
which is what i wanted to use in my Input, but couldnt cuz tailwind css's max width is only w-96, which is just 24 rem

==========
12/07/2023
==========
seems like i dont even need to add mode: "jit"
also the reason why i wasnt able to use tailwind wasnt because it no electricity or no wifi, its because the config was not correct, i had to add the config
content: [
"./elements/**/*.{ts,tsx}",
],

had to tell tailwind that the elements inside elements are also in need for tailwind so yeah. the code works brilliantly now!

===========
13/07/2023
===========
adding more> and less> in a text section:
typically i think you should have been able to add

-webkit-line-clamp: 4; //for 4 lines max
-webkit-box-orient: vertical;

and this would limit your line to only 4 at max and it would have been fine, tara nope! not in my condition mate. the line-clamp shit doent even work mate.
then on click you would remove the limit then add it again, on click on less>

# RESOLVED

- Seems like you can do it you just need to set the height and width of your component, if its inside any display property, give it 100% or any amount of size you want.
  then on the desc....

hell nah, thats not it, you could add it already, it seems like i just didnt know how, should have just added line-clamp-4 using tailwind css in the <p> it seems like...
i.e. just this:
.line-clamp-4 {
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 4;
}

with this my header is done for, i need to work on its responsiveness, later!

=======
part 2 [Navbar Section]
=======

- yeah it seems like its 100vh with 10vh navbar, 60vh books 30vh events right?
  lets get to it I guess.

========
part 3 [Books below Navbar && rendering them conditionally]
========

- so what you do is, you just map the navbar then just like the how i had rendered info of A
  particular book on click, you just do that, pass the navId to the book section then according to the id
  display the information of the section from the navbar.

- work on the new arrivals display part
  - add the info of all the books to be displayed in the helper folder then map them then use grid to display
    all of them in 5x2 format

==========
15/07/2023
==========
UPDATE: TO-DO
now i have done new arrival, i need to make these responsive as well, add a model or a new paget that the user will go to when clicking on the image of the books, probably a new page though, it would be better, IMO.
also got to add icons for now, static, OFC, and price, dummy data, yeah, thats about it.

FOR IMAGE'S ORIENTATION though
Set the display to flex and h-full and w-full and set image width whatever you want, so that you can use it to fill your image, and it works excellently. GGs mate.

==========
3:41 PM - 16/07/2023
==========
fixing image misorientation in NEXT.js

- set an size for your image, then set your image's height and width to full & oject fit to cover [h-full w-full object-cover]
- so with that you are good to go mate

22:07, this is how you add linear-gradient to your react or next.js (minor syntax changes based on the tech) inline css huh?
style={{background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("someImg")`}}

# UPDATE: To-Do

i think instead of separting dummy data for each section, i need to add them all in one object, but separated by list of tags, sure, good idea, need to implement later, as it is how it will be in db anyway.

=============
27/07/2023 - 22:34
=============

so mate, i am seeing that yeah, i need to learn a lot still, but lets talk about the things that i learned today, on passing value through (e)
one thing i can do is,

on a log in form or anyform with many data, just do this

//create object in useState
const [inputData, setInputData] = useState<string>("");

//setUp onChange Function
const onChange(e: React.ChangeEvent<HTMLInputElement>) => {
setInputData({
...inputData,
[e.target.name]: e.target.value
})
}

//passing e from any no. of inputs
<Input onChange={(e)=>onChange(e)} />

//but if you got to put value not to useState but to variable then...

(e) => {
email = e.target[0].value;
password = e.target[1].value;
}

//sample auth using nextAuth Next.js
const handleSubmit = async (e: any) => {
e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    await signIn("credentials", { email, password });

};

- another thing i wanted to mention is that, mate, i need to learn NextAuth again, it seems like i have forgotten it, damn! i got to revisit it, but i know that it was easy to understand and learn, but we'll see about that.

---

## 31/12/2023 - 1:38 PM

## Ways to add see more or see less

so the way that i have done my see more or see less, is i have simply added a line clamp to my "content" i.e. just paragraph, but the way i see how it is done is that; you got lots of contents therefore your goal is only render a single component or "content and save other for later, and the reason why i was seeing shadowish effect on the Mangadex's synopsis is prabably not the shadow effect on top of the div of see more button, its probably the transition effect that the lesser content has or is added to it"

### techniques for see more or less

if: one content
Add a line clamp

if: multiple content
Stack Multiple Contents and display one after another

for the shadow effect, simply add transition BG that is darker in the bottom and the more it makes its way up the lighter it gets

also now i need to add an animation to my see more or see less side of things
