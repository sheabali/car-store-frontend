import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useBlockUserMutation,
  useGetAllUserQuery,
} from '@/redux/features/admin/userManagement.api';

const UserManagement = () => {
  const { data: userData, isFetching, refetch } = useGetAllUserQuery(undefined);
  const [blockUser, { isSuccess, isLoading }] = useBlockUserMutation();
  console.log(userData);

  const handleBlockUser = async (userId: string) => {
    console.log('Blocking user with ID:', userId);
    try {
      await blockUser(userId).unwrap();
      console.log('User blocked successfully!');
      refetch();
    } catch (error) {
      console.error('Failed to block user', error);
    }
  };

  return (
    <div className="w-[1120px] px-4 mt-5">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>

      {isFetching ? (
        <p className="text-center text-gray-500">Loading users...</p>
      ) : (
        <Table>
          <TableCaption>List of registered users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData && userData?.data.length > 0 ? (
              userData?.data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>
                    {user?.status === 'in-progress' ? 'Active' : 'Blocked'}
                  </TableCell>

                  <TableCell>{user.role}</TableCell>
                  <TableCell className="text-right flex gap-2 justify-end">
                    <Button
                      variant="destructive"
                      onClick={() => handleBlockUser(user._id)} // Ensure this is correct
                      // disabled={isLoading || user.status === 'blocked'}
                    >
                      {isLoading
                        ? 'Blocking...'
                        : user.status === 'blocked'
                        ? 'Blocked'
                        : 'Block'}
                    </Button>

                    <Button variant="secondary">Make Admin</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default UserManagement;
