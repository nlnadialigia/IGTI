import {promises as fs} from 'fs'

const teams = []

async function iniit() {
  try {
    
    const data = JSON.parse(await fs.readFile('./data/2003.json'))
  
    //ARRAY DE TIMES
    data[0].partidas.forEach(game => {
      teams.push({team: game.mandante, score: 0})
      teams.push({team: game.visitante, score: 0})
    });
  
    // PONTUAÇÃO DOS TIMES
    data.forEach(round => {
      round.partidas.forEach(game => {
        const masterTeam = teams.find(item => item.team === game.mandante)
        const visitingTeam = teams.find(item => item.team === game.visitante)
  
        if (game.resultado === 'vitoria_mandante') {
          masterTeam.score += 3
        } else if (game.resultado === 'derrota_mandante') {
          visitingTeam.score += 3
        } else {
          masterTeam.score ++
          visitingTeam.score ++
        }
      });
    });
  
    
    teams.sort((a, b) => {
      return b.score - a.score
    })
    console.log(teams);
  
    await saveTeams()
    await saveFirstFourTeams()
  } catch (error) {
    console.log(error);
  }
}

iniit()

async function saveTeams() {
  fs.writeFile('./data/teams.json', JSON.stringify(teams, null, 2))
}

async function saveFirstFourTeams() {
  fs.writeFile('./data/first-four.json', JSON.stringify(teams.slice(0, 4), null, 2))
}