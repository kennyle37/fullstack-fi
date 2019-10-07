import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Button from './Button'
import StatisticContainer from './StatisticContainer'
import Statistic from './Statistic'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const App = ({ anecdotes }) => {
  const [ totalCount, setTotalCount ] = useState({good: 0, neutral: 0, bad: 0});
  const { good, neutral, bad } = totalCount;
  const [ selected, setSelected ] = useState(0);
  const [ anecdoteVotes, setAnecdoteVotes ] = useState(new Array(anecdotes.length).fill(0))
  const all = good+bad+neutral;
  const average = (good + bad + neutral) > 0 ? (good + bad*-1) / (good + bad + neutral) : 0;
  const positive = (good + bad + neutral) > 0 ? (good / (good + bad + neutral)) * 100 : 0;
  const averageRounded = average.toFixed(2);
  const positiveRounded = positive.toFixed(2);

  const handleGoodCount = (value) => () => {
    setTotalCount({
      ...totalCount,
      good: value,
    })
  }
  
  const handleNeutralCount = (value) => () => {
    setTotalCount({
      ...totalCount,
      neutral: value,
    })
  }

  const handleBadCount = (value) => () => {
    setTotalCount({
      ...totalCount,
      bad: value,
    })
  }

  const handleGenerateAnecdotes = () => {
    let random = Math.floor(Math.random() * (anecdotes.length));
    setSelected(random);
  }

  const handleVote = () => {
    const copy = [...anecdoteVotes];
    copy[selected] += 1;
    setAnecdoteVotes(copy);
  }

  const getMostVote = () => Math.max(...anecdoteVotes);

  const getMostVoteAnecdote = () => {
    const index = anecdoteVotes.indexOf(Math.max(...anecdoteVotes));
    return anecdotes[index];
  }
  //return the max
  //return the index of the max
  return (
    <div>
      <Header title={'give feedback'} />
      <Button handleClick={handleGoodCount(good+1)}>Good</Button>
      <Button handleClick={handleNeutralCount(neutral+1)}>Neutral</Button>
      <Button handleClick={handleBadCount(bad+1)}>Bad</Button>
      <Header title={'statistics'} />
      <StatisticContainer good={good} bad={bad} neutral={neutral}>
        <Statistic metric={'good'} score={good}/>
        <Statistic metric={'neutral'} score={neutral}/>
        <Statistic metric={'bad'} score={bad}/>
        <Statistic metric={'all'} score={all} />
        <Statistic metric={'average'} score={averageRounded} />
        <Statistic metric={'positive'} score={positiveRounded + ' %'} />
      </StatisticContainer>
      <Header title={'Anecdotes of the day'} />
      <p>{anecdotes[selected]}</p>
      <p>Has {anecdoteVotes[selected]} votes</p>
      <Button handleClick={handleVote}>Vote</Button>
      <Button handleClick={handleGenerateAnecdotes}>Next Anecdote</Button>
      <Header title={'Anecdotes with the most votes'} />
      <p>{getMostVoteAnecdote()}</p>
      <p>has {getMostVote()} votes</p>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />, 
  document.getElementById('root')
)