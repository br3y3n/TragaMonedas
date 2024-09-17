import statisticsChartsData from '../data/statistics-charts-data'
import StatisticsChart from '../components/statistics-chart'

import LoggedLayout from '../layouts/Logged.layout'

const Charts = () => {

  document.title = "Estadisticas";

  return (

    <LoggedLayout>
      <section className='w-full'>

        <div>
            <h1 className="text-3xl font-semibold mb-6">Estadisticas</h1>
        </div>
        <div>
            <div className="mb-6 grid sm:grid-cols-1 md:grid-cols-3 gap-5">
              {statisticsChartsData && statisticsChartsData.map((props) => (
                <StatisticsChart
                  key={props.title}
                  {...props}
                />
              ))}
            </div>
        </div>

      </section>

    </LoggedLayout>

  )
}

export default Charts;
