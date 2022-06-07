### Generate Blocks to get the xml for prerender
```
Blockly.Xml.workspaceToDom(workspace)
```
### regex 
```
id="(.*?)"
```

### Bridge Tests
```
function NativeInterface() {
  this.dispatch = function (json) {
    console.log('Native', json);
  };
}

var Native = new NativeInterface();

window.bridge = new Bridge(window, bridge.callback);

bridge.transfer(
  JSON.stringify({
    type: "INIT",
    competition: {
      _id: "608a7c9d8d8bfc23d64c8e04",
      thumbnail:
        "https://s3.ap-south-1.amazonaws.com/curiousjr-public/web/curiousjr-backend-job-posting_1619672098213.png",
      title: "Coding Marathon April 2021",
      subtitle: "Hosted by CuriousJr",
      start: "2021-04-29T09:44:47.528Z",
      end: "2021-08-30T20:42:47.528Z",
      durationMillis: 2717880000,
      countdownMillis: 0,
      registered: true,
      submitted: true,
      task: {
        category: "TEXT",
        text:
          "This is the competition to find the best coders.\n\nYou have to learn blockly and then participate in the competition",
        video: null,
      },
      reward: [
        "Winner will get a Google Pixel",
        "First Runnerup will get a Google Pixel",
        "Second Runnerup will get a Google Pixel",
      ],
      announcement: [
        "Result will be announced after 24 hours",
        "We will contact the winners",
      ],
      rules: ["Participants should be above class 8", "No cheating is allowed"],
      instruction: {
        category: "TEXT",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        video: {
          thumbnail:
            "https://s3.ap-south-1.amazonaws.com/curiousjr-public/web/coding_on_my_mobile_1600766931981.jpg",
          vimeoId: "539213465",
        },
      },
      faq: [
        {
          que: "Question 1",
          ans:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
          que: "Question 2",
          ans:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
          que: "Question 3",
          ans:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
          que: "Question 4",
          ans:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
      ],
      contest: {
        mode: "BLOCKLY",
        res: "test1/index.html",
        link:
          "https://api.dev.curiousjr.com/v1/assets/competition/608a7c9d8d8bfc23d64c8e04_contest.zip",
        data: "[BLOCKLY DATA]",
        code: "[USER PROGRAM]",
      },
      certEnabled: true,
      certificate: {
        _id: "60901ecd8682dd4711d6946a",
        code: "761C93D013",
        imgUrl:
          "https://curiousjr-public.s3.ap-south-1.amazonaws.com/certificate/761C93D013.jpg",
        pdf:
          "https://curiousjr-public.s3.ap-south-1.amazonaws.com/certificate/761C93D013.pdf",
        awardee: "Janishar Ali",
        subject: "Coding Marathon April 2021",
        issuedAt: "2021-05-03T16:03:22.496Z",
      },
      product: {
        _id: "608c2ccbc21f11491c2a0c5f",
        resId: "608a7c9d8d8bfc23d64c8e04",
        price: {
          original: 0,
          discounted: 0,
          currency: "INR",
        },
      },
      free: true,
      totalScore: 200,
      resultAt: "2021-06-05T20:42:47.528Z",
      resultPlaceholder: {
        title:
          "You have participated in the competition but the competition is still alive",
        subtitle: "Result will be uploaded by Saturday, June 5th 2021, 8:42 PM",
      },
    },
  })
);

```

### Get block solution
```
workspace.getAllBlocks().map(({type}) => type)
```

### Get block solution for preloaded blocks
```
workspace.getAllBlocks().filter((block) => block.isDeletable() !== false).map((block) => block.type)
```

### Check parent
```
workspace.getAllBlocks().filter(block => block.type === 'random_number_variable')[0].getParent().type
```
