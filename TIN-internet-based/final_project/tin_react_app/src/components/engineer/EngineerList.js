import { Link } from "react-router-dom";
import { getEngineersApiCall } from "../../apiCalls/engineerApiCalls";
function EngineerList() {
  const engineerList = getEngineersApiCall();
  return (
    <main>
      <h2>Engineers</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Specialisation</th>
            <th>Hour rate</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {engineerList.map((engineer) => (
            <tr key={engineer.id}>
              <td>{engineer.firstName}</td>
              <td>{engineer.lastName}</td>
              <td>{engineer.specialisation}</td>
              <td>{engineer.hourRate}</td>
              <td>{engineer.contact}</td>
              <td>
                <ul className="list-actions">
                  <li>
                    <Link
                      to={`engineers/details/${engineer.id}`}
                      className="list-actions-button-details"
                    >
                      Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`engineers/edit/${engineer.id}`}
                      className="list-actions-button-edit"
                    >
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`engineers/delete/${engineer.id}`}
                      className="list-actions-button-delete"
                    >
                      Delete
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="section-buttons">
        <Link href="/engineers/add" className="button-add">
          Add new engineer
        </Link>
      </p>
    </main>
  );
}

export default EngineerList;
