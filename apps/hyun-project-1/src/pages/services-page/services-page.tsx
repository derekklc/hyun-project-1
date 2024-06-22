import jsx from 'styled-jsx';
import { servicesList } from '../../constants';

const transformTo2DArray = (arr: string[]) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr.slice(i, i + 3));
  }
  return result;
};

const getServicesMenu = () => {
  const columns = transformTo2DArray(servicesList);
  return columns.map((item, index) => {
    return (
      <div className="services-block" key={index}>
        {item.map((serviceName) => {
          return (
            <span className="service-item" key={serviceName}>
              {serviceName}
            </span>
          );
        })}
      </div>
    );
  });
};

export function ServicesPage() {
  return (
    <div>
      <style jsx global>{`
        .services-container {
          display: flex;
          flex-wrap: wrap;
          row-gap: 20px;
          column-gap: 20px;
        }
        .services-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-left: 2px solid #4aa2c5;
          padding-left: 10px;
          min-width: 160px;
        }
        .service-item {
          cursor: pointer;
          padding: 2px 4px;
          border-radius: 4px;
        }
        .service-item:hover {
          background: rgb(224 246 255 / 33%);
        }
      `}</style>
      <h1>Services</h1>
      <div className="services-container">{getServicesMenu()}</div>
    </div>
  );
}

export default ServicesPage;
