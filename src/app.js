const express = require('express');

const app = express();

app.use(express.json());

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];

app.get('/activities', (req, res) => res.status(200).json({ activities }));

app.post('/activities', (req, res) => {
    const newTeam = { ...req.body };
    activities.push(newTeam);
  
    res.status(201).json({ team: newTeam });
  });

app.put('/activities/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
    let updatedTeam;
  
    for (let i = 0; i < activities.length; i += 1) {
      const team = activities[i];
  
      if (team.id === Number(id)) {
        team.name = name;
        team.initials = initials;
        updatedTeam = team;
      }
    }
  
    res.status(200).json({ updatedTeam });
  });

  app.delete('/activities/:id', (req, res) => {
    const { id } = req.params;
    const arrayPosition = activities.findIndex((team) => team.id === Number(id));
    activities.splice(arrayPosition, 1);
  
    res.status(200).end();
  });

module.exports = app;