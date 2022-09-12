const express = require("express");

const app = express();

app.use(express.json());

const activities = [
  {
    id: 1,
    description: "Banho no cachorro",
    status: "A fazer",
  },
  {
    id: 2,
    description: "Cortar a grama",
    status: "A fazer",
  },
  {
    id: 3,
    description: "Estudar JavaScript",
    status: "Feito",
  },
];

app.get("/myActivities", (req, res) => res.status(200).json({ activities }));

app.get("/myActivities/:id", (req, res) => {
  const activity = activities.find((e) => e.id === Number(req.params.id));
  res.status(200).json(activity);
});

// app.post('/activities', (req, res) => {
//     const newActivity = { ...req.body };
//     activities.push(newActivity);

//     res.status(201).json({ activity: newActivity });
//   });

// app.put('/activities/:id', (req, res) => {
//     const { id } = req.params;
//     const { description, status } = req.body;
//     let updatedActivity;

//     for (let i = 0; i < activities.length; i += 1) {
//       const activity = activities[i];

//       if (activity.id === Number(id)) {
//         activity.description = description;
//         activity.status = status;
//         updatedActivity = activity;
//       }
//     }

//     res.status(200).json({ updatedActivity });
//   });

//   app.delete('/activities/:id', (req, res) => {
//     const { id } = req.params;
//     const arrayPosition = activities.findIndex((activity) => activity.id === Number(id));
//     activities.splice(arrayPosition, 1);

//     res.status(200).end();
//   });

module.exports = app;
