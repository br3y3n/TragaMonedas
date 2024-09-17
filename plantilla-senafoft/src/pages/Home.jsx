import LoggedLayout from "../layouts/Logged.layout";

import statisticsChartsData from '../data/statistics-charts-data'
import StatisticsChart from '../components/statistics-chart'

const Home = () => {
  document.title = "Inicio de la aplicación";

  return (
    <LoggedLayout>
      <div>
        <div>
          <h1 className="text-3xl font-semibold mb-6">Bienvenido, Carlitos!</h1>
        </div>

        <div>
          <div className="mb-6 grid sm:grid-cols-1 md:grid-cols-3 gap-5">
            {statisticsChartsData &&
              statisticsChartsData.map((props) => (
                <StatisticsChart key={props.title} {...props} />
              ))}
          </div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rem id alias assumenda porro ipsum blanditiis
            doloribus illum cumque aperiam. Hic accusantium alias eius
            perferendis eos. Voluptate, at! Facere qui similique iste ipsa sit
            vero accusamus iusto voluptatem. Molestias, amet. Fugit in
            dignissimos eveniet non ducimus officiis aperiam quos sed recusandae
            saepe magni facere, nostrum temporibus voluptates odio corporis
            laudantium id, voluptatem illum deserunt ipsam atque quidem est?
            Quibusdam laudantium recusandae repellat iusto pariatur dolore rem
            facere incidunt debitis velit? Repellendus harum fugiat, nobis esse
            nisi, dolorem expedita nostrum delectus quidem sapiente eaque
            dolorum corrupti magni minima rem iste ea.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rem id alias assumenda porro ipsum blanditiis
            doloribus illum cumque aperiam. Hic accusantium alias eius
            perferendis eos. Voluptate, at! Facere qui similique iste ipsa sit
            vero accusamus iusto voluptatem. Molestias, amet. Fugit in
            dignissimos eveniet non ducimus officiis aperiam quos sed recusandae
            saepe magni facere, nostrum temporibus voluptates odio corporis
            laudantium id, voluptatem illum deserunt ipsam atque quidem est?
            Quibusdam laudantium recusandae repellat iusto pariatur dolore rem
            facere incidunt debitis velit? Repellendus harum fugiat, nobis esse
            nisi, dolorem expedita nostrum delectus quidem sapiente eaque
            dolorum corrupti magni minima rem iste ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rem id alias assumenda porro ipsum blanditiis
            doloribus illum cumque aperiam. Hic accusantium alias eius
            perferendis eos. Voluptate, at! Facere qui similique iste ipsa sit
            vero accusamus iusto voluptatem. Molestias, amet. Fugit in
            dignissimos eveniet non ducimus officiis aperiam quos sed recusandae
            saepe magni facere, nostrum temporibus voluptates odio corporis
            laudantium id, voluptatem illum deserunt ipsam atque quidem est?
            Quibusdam laudantium recusandae repellat iusto pariatur dolore rem
            facere incidunt debitis velit? Repellendus harum fugiat, nobis esse
            nisi, dolorem expedita nostrum delectus quidem sapiente eaque
            dolorum corrupti magni minima rem iste ea.
          </p>s
        </div>
      </div>
    </LoggedLayout>
  );
};

export default Home;
