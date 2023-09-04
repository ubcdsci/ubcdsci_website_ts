import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

import { useGetUsersQuery } from "./usersApiSlice";


/**
 * User row in the users table.
 */
const User = ({ userId }: { userId: any }) => {
  const { user } : { user: any } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
        user: data?.entities[userId]
    }),
  });

  const navigate = useNavigate();

  if (user) {
    const handleEdit = () => navigate(`/dash/users/${userId}`);
    const userRolesString = user.roles.toString().replaceAll(",", ", ");
    const cellStatus = user.active ? "" : "table__cell--inactive";

    return (
      <tr className="table__row user">
        <td className={`table__cell ${cellStatus}`}>
          { user.username }
        </td>
        <td className={`table__cell ${cellStatus}`}>
          { userRolesString }
        </td>
        <td className={`table__cell ${cellStatus}`}>
          <button
            className="icon-button table__button"
            onClick={handleEdit}
          >
            <FaEdit />
          </button>
        </td>
      </tr>
    );
  } else {
    return null;
  }
}

const memoizedUser = memo(User);

export default memoizedUser;
