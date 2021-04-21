# Reason Lift!
[Reason Lift!](https://www.reasonlift.com "Reason Lift!") is a platform for improving one's thinking on particular subjects by submitting essays for review by experts.

## Theory

In his course "Philosophy of Education," Dr. Leonard Peikoff stresses the need for students to submit essays, in each class, as an indispensable means of training them in proper thinking methods. He believes that writing, as opposed to speaking, is the only means of fully organizing your thoughts on a complex subject since there are too many aspects to a complex subject for mere speaking to allow someone to keep those aspects separate and identifiable.

In his view, both the act of expressing one's thoughts in writing, but also having this writing scrutinized by people with proper thinking methods and some grasp of the subject, was crucial. Only through extensive writing and having this writing scrutinized can someone be trained in intellectual rigor and, therefore, in how to think properly.

Needless to say, very few people have gone through this kind of training and, as a result, many adults have difficulties organizing their thoughts and communicating them.

The purpose of this website is to provide a platform in which adults can improve their thinking on particular subjects, and in general, by submitting essays on subjects of their choice and having those essays reviewed by subject matter experts.

## Technologies Used

The frontend is written within a React/Redux framework to allow for fast site navigation; the backend uses the Express framework on top of MongoDB. Express responds with JSON in response to Axios requests.

## Reviewing Essays

Reason Lift! has two modes: essay submission mode and essay review mode. In "Review Mode," the split-screen view shown below allows the user to view, at the same time, both the essay he is reviewing along with the review he is writing:

![rl-small-preview](https://user-images.githubusercontent.com/2721658/115614566-1b88f580-a2ab-11eb-97b6-0160182b0d33.png)

The ability to view both components simultaneously and to scroll them independently is key to having a great user experience for the reviewers. This way, the reviewer doesn't need to switch between tabs, have multiple windows open or print physical copies of the essay in order to see everything he's working on. This functionality was achieved partly through CSS that is invoked upon mounting/unmounting of the React components responsible for the essay review pages.

```javascript
componentDidMount() {
  FormUtil.enableFormStyling();
  ...
}

...
  
componentWillUnmount() {
  FormUtil.disableFormStyling();
}
```
```javascript
export const enableFormStyling = () => {
  document.getElementsByClassName("sidebar")[0].style.display = "none";
  document.getElementsByClassName("main")[0].style.width = "100%";
  document.getElementsByTagName("footer")[0].style.display = "none";

  formStylingCallback();
  window.addEventListener("resize", formStylingCallback);
}

const formStylingCallback = () => {
  if (window.innerWidth > 675) {
    document.getElementsByClassName("page-content")[0].style.overflow = "hidden";
    document.getElementsByClassName("page-content")[0].style.height = "100%";
    document.getElementsByClassName("main")[0].style.height = "100%";
    document.getElementsByClassName("main")[0].style.padding = "0";
  } else {    
    document.getElementsByClassName("page-content")[0].style.overflowY = "";
    document.getElementsByClassName("page-content")[0].style.height = "";
    document.getElementsByClassName("main")[0].style.height = "";
    document.getElementsByClassName("main")[0].style.padding = "";
  }
}

export const disableFormStyling = () => {
  window.removeEventListener("resize", formStylingCallback);

  document.getElementsByClassName("sidebar")[0].style.display = "";
  document.getElementsByClassName("main")[0].style.width = "";  
  document.getElementsByTagName("footer")[0].style.display = "";

  document.getElementsByClassName("page-content")[0].style.overflowY = "";
  document.getElementsByClassName("page-content")[0].style.height = "";
  document.getElementsByClassName("main")[0].style.height = "";
  document.getElementsByClassName("main")[0].style.padding = "";
}
```

## Auto-Saving

While the user is writing any essay or review, auto-saving is done every four seconds after the last change to the input form and the user is notified that his draft has been saved. With draft essays, I created a separate data model in MongoDB, whereas with reviews I simply added a boolean column to the Review model to indicate whether the review was final (i.e., had been submitted).

The auto-saving functionality is implemented in the React components for the essay and review forms:

```javascript
handleInput(event) {
  this.setState({ [event.target.id]: event.target.value });
  this.initAutoSave();
}

...

initAutoSave() {
  window.clearTimeout(this.autoSaveTimeout);
  this.setState({ draftMessage: "" });

  this.autoSaveTimeout = window.setTimeout(() => {
    this.saveDraft(this.state).then(() => {
      if (this.isEmpty(this.props.draftErrors)) {
        const { draft } = this.props;
        this.setState({ id: draft._id });

        this.saveDraft = this.props.updateDraft;
        this.setState({ draftMessage: "Draft Saved!" });
      }
    });
  }, 4000);
}
```
