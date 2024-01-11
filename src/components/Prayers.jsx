import { Link, Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';

const Prayers = ({prayers}) => {
    return <Container className="mt-2" style={{minHeight: 'calc(100vh - 180px)'}} fluid >
              {prayers.map(prayer => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/prayers/${prayer.id}`}
            key={prayer.number}
          >
            {prayer.name}
          </Link>
        ))}
        <Outlet/>
      </Container>

}

export default Prayers;