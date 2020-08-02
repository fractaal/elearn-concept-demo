const Data = {}

Data.Notifications = [
  {
    title: "Crash detected",
    desc: "On July 28, 2020 9:12:11pm, Multiple XU services crashed due to a fatal segmentation fault in our reverse-proxy/load balancer host machine. The issue was fixed in approx. 48 minutes and normal operation was restored by 10pm.",
    index: 3,
    type: "danger"
  },
  {
    title: "Hi! This is a concept",
    desc: "made by me, my idea of what XU eLearn -could- be like. Sadly hanggang dito lang ito huehuehuehue",
    index: 1
  },
  {
    title: "eLearn Service Interruption Advisory",
    desc: "We would like to inform the Xavier Ateneo Community that there will be a maintenance downtime tomorrow, Saturday, July 11, 2020, staring 3:00PM until 6:00PM. During this time, eLearn for both undergraduates and graduates/professionals will be unavailable due to the said maintenance work.",
    index: 2,
    type: "primary",
  },
  {
    title: "eLearn Service Interruption Advisory",
    desc: "We would like to inform the Xavier Ateneo Community that there will be a maintenance downtime tomorrow, Saturday, July 11, 2020, staring 3:00PM until 6:00PM. During this time, eLearn for both undergraduates and graduates/professionals will be unavailable due to the said maintenance work.",
    index: 4
  },
]

Data.User = {
  Courses: [
    {
      Name: "CC 10 A 1 - INTRODUCTION TO COMPUTING",
      Professor: "Elvira Yaneza",
      Desc: "This course provides an overview of the computing industry and computing profession, including research and applications in different fields; an appreciation of...",
      ID: 23,
    },
    {
      Name: "2001-HIST 1 CCA1",
      Professor: "Roel Absin",
      Desc: "STUDENTS ARE REQUIRED TO GIVE THEIR COMMENTS IN A SENTENCE BELOW WITH THEIR NAMES INDICATED.",
      ID: 48
    },
    {
      Name: "ORSEM 2020",
      Professor: "Wow",
      Desc: "You're done with this anyway",
      ID: 69,
    },
    {
      Name: "2001-THEO 1 CCA1",
      Professor: "Justiniao Damiao",
      Desc: "aspfjasiopfaioghuet789ty9q83yt98723578923yh5987235h4u3io2wf",
      ID: 241277471275725821,
    },
  ],
  Assignments: [
    {
      Name: "Who is Jesus to you?",
      Course: "THEO",
      ID: 1251,
    }
  ],
}

export default function(Item) { // pretend this is a remote async api call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Data[Item]) {
        resolve(Data[Item])
      } else {
        reject("Not found")
      }
    }, (Math.random() * 1500) + 1000)
  })
}
