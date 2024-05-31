export const questionDetails = (()=>{
  const arr =[]
  for (let i=0;i<100;i++)
    {
      arr.push({
        id: i,
        question: `kyc - level ${i}`,
        overView: "over-view of kyc lavel",
        // answerLanguage: {
        //   details: {
        //     javascript: `kyc level 1 `,
        //     python: `kyc level 2 `,
        //     html: `<p>kyc level 3 </p>`,
        //   },
        //   code: {
        //     javascript: `function helloWorld() {
        //      console.log('Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world! Hello, world!');
        //    }`,
        //     python: `def helloWorld():
        //    print('Hello, world!')`,
        //     html: `<p>Hello, world!</p>`,
        //   },
        // },
      })
    }

    return arr
})
