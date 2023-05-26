import { Link } from "react-router-dom";
function EngineerList() {
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
          <tr>
            <td>Jack</td>
            <td>Hammer</td>
            <td>Mixing engineer</td>
            <td>80.0</td>
            <td>jack.hammer@sharc.com</td>
            <td>
              <ul className="list-actions">
                <li>
                  <Link
                    href="/engineers/details/1"
                    className="list-actions-button-details"
                  >
                    Details
                  </Link>
                </li>
                <li>
                  <Link
                    href="/engineers/edit/1"
                    className="list-actions-button-edit"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/engineers/delete/1"
                    className="list-actions-button-delete"
                  >
                    Delete
                  </Link>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Dwight</td>
            <td>Schnute</td>
            <td>Mastering engineer</td>
            <td>120.0</td>
            <td>dwight.schnute@sharc.com</td>
            <td>
              <ul className="list-actions">
                <li>
                  <Link
                    href="/engineers/details/2"
                    className="list-actions-button-details"
                  >
                    Details
                  </Link>
                </li>
                <li>
                  <Link
                    href="/engineers/edit/2"
                    className="list-actions-button-edit"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/engineers/edit/2"
                    className="list-actions-button-delete"
                  >
                    Delete
                  </Link>
                </li>
              </ul>
            </td>
          </tr>
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
