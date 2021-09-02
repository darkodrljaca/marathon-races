import Race from './Race';


const Races = ({races}) => {
  return <section>
    <div className='title'>
      <h2>City Marathon Races</h2>
      <div className='underline'></div>
    </div>
    <div>
        {
          races.map((race)=>{
            return <Race key={race.id} {...race}></Race>
          })
        }
      
    </div>    
  </section>;
};

export default Races;
