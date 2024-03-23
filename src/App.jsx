import React, { useState } from 'react';
import './App.css'; // Your CSS file if needed
import * as contentful from 'contentful';

import data from './data/real-estate.json'
function App() {
  const [budget, setBudget] = useState(0);
  const [income, setIncome] = useState(0);
  const [creditScore, setCreditScore] = useState(0);

  const client = contentful.createClient({
    space: 'rr7n560wercm',
    accessToken: 'rNjT5tkjoonrt2yxPqylZhpIbBM8f9tuPilyY7rLr6c'
  });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   try {
  //     // Create a new entry
  //     const entry = await client.createEntry('LoanInquiry', { 
  //       fields: {
  //         budget: { 'en-US': budget },
  //         income: { 'en-US': income },
  //         creditScore: { 'en-US': creditScore }
  //       }
  //     });
  
  //     console.log('Entry created/updated successfully:', entry);
  //   } catch (error) {
  //     console.error('Error submitting data:', error);
  //   }
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   try {
  //     const space = await client.getSpace('rr7n560wercm');
  //     const environment = await space.getEnvironment('1X5zLvcYJ9dSEFrLH8rvJT');
  //     const entry = await environment.createEntry('LoanInquiry', {
  //       fields: {
  //         budget: { 'en-US': budget },
  //         income: { 'en-US': income },
  //         creditScore: { 'en-US': creditScore }
  //       }
  //     });
  
  //     console.log('Entry created successfully:', entry);
  //   } catch (error) {
  //     console.error('Error submitting data:', error);
  //   }
  // };



  const handleSubmit = async (event) => {
    // Make API call to LangChaain passing out Form Data
    // Wait! 
    async function postData(url = '', data = {}) {}
    
    event.preventDefault();
  
    try {

      client.getEntry('1X5zLvcYJ9dSEFrLH8rvJT')
      .then((entry) => console.log(entry))
      .catch(console.error)
      console.log('Entry created successfully:', entry);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  
  
  

  const handleBudgetChange = (event) => setBudget(event.target.value);
  const handleIncomeChange = (event) => setIncome(event.target.value);
  const handleCreditScoreChange = (event) => setCreditScore(event.target.value);

  return (
    <div className="container">
      <h1>Reverse Sale</h1>

      <div className="input-group">
        <label htmlFor="budget">Budget:</label>
        <input type="number" id="budget" value={budget} onChange={handleBudgetChange} />
      </div>



      {/* Similar input groups for income and credit score */}
      <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="income">Income:</label>
        <input type="number" id="income" value={income} onChange={handleIncomeChange} />
      </div>
      <div className="input-group">
        <label htmlFor="credit-score">Credit Score:</label>
        <input type="number" id="credit-score" value={creditScore} onChange={handleCreditScoreChange} />
      </div>
      <button type="submit" >Submit</button> 
      </form> 

      

      <div className="bars">
        <div className="bar budget-bar" style={{ width: `${budget}%` }}></div>
        <div className="bar income-bar" style={{ width: `${income}%` }}></div>
        <div className="bar credit-score-bar" style={{ width: `${creditScore}%` }}></div>
      </div>
    </div>
  );
}

export default App;

