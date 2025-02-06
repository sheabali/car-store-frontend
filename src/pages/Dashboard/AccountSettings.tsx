import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const AccountSettings = () => {
  const [success, setSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({});

  // Handle password update
  const onSubmit = async (data: {
    oldPassword: string;
    newPassword: string;
  }) => {
    setServerError(null);
    setSuccess(null);
    console.log(data);
  };

  return (
    <div className="lg:w-[1085px] mx-auto p-4 sm:p-6 md:p-8 space-y-8">
      {/* Account Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Account</h2>
        <p className="text-gray-600">
          Real-time information and activities of your property.
        </p>
      </div>

      {/* Profile Picture Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex space-x-4">
          <Button className="px-4 py-2 bg-black text-white font-semibold rounded-md">
            Upload new picture
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 bg-gray-200 text-black font-medium rounded-md"
          >
            Delete
          </Button>
        </div>
      </div>

      {/* Full Name Section */}
      <div className="space-y-4">
        <h3 className="font-medium text-lg">Full name</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="First name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <Input
            type="text"
            placeholder="Last name"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Contact Email Section */}
      <div className="space-y-4">
        <h3 className="font-medium text-lg">Contact email</h3>
        <p className="text-gray-600">
          Manage your account's email address for the invoices.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Input
            type="email"
            placeholder="Email"
            value="bryan.cranston@mail.com"
            readOnly
            className="w-full px-4 py-2 border rounded-md"
          />
          <Button
            variant="outline"
            className="px-4 bg-black text-white font-semibold rounded-md"
          >
            Add another email
          </Button>
        </div>
      </div>

      {/* Password Section */}
      <div className="space-y-4">
        <h3 className="font-medium text-lg">Password</h3>
        <p className="text-gray-600">Modify your current password.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Input
                type="password"
                placeholder="Current password"
                className="w-full px-4 py-2 border rounded-md"
                {...register('oldPassword')}
              />
              {errors.currentPassword && (
                <p className="text-red-500 text-sm">
                  {String(errors.currentPassword.message)}
                </p>
              )}
            </div>

            <div>
              <Input
                type="password"
                placeholder="New password"
                className="w-full px-4 py-2 border rounded-md"
                {...register('newPassword')}
              />
              {errors.newPassword && <p className="text-red-500 text-sm"></p>}
            </div>

            <Button
              type="submit"
              className="py-2 font-semibold w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating...' : 'Change password'}
            </Button>
          </div>

          {serverError && (
            <p className="text-red-500 text-sm mt-2">{serverError}</p>
          )}
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
