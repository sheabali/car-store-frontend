import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser, TUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import verifyToken from '@/utils/verifyToken';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const defaultValues = {
  //   userId: '2026010016',
  //   password: 'student123',
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('Logged in', { id: toastId, duration: 2000 });

      if (res.data.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        navigate(`/${user.role}`);
      }
    } catch {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-16">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-semibold mb-2">Get Started</h1>
          <p className="text-gray-600 mb-8">
            Welcome to BOXCARS – Let’s create your account
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                type="text"
                id="email"
                {...register('email', { required: 'User ID is required' })}
                className="w-full mt-1 px-4 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your User ID"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email?.message?.toString()}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                {...register('password', { required: 'Password is required' })}
                className="w-full mt-1 px-4 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password?.message?.toString()}
                </p>
              )}
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-black hover:underline">
                  Forgot?
                </a>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full py-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-700"
            >
              Log In
            </Button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account?{' '}
            <a href="#" className="text-green-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gradient-to-br from-black to-gray-800 text-white flex flex-col justify-center items-center p-16 relative">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Discover Your Dream Car, today
        </h1>
        <div className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Explore Our Collection</h2>
          <p className="text-sm mb-4">
            Find cars that match your style and budget
          </p>
          <div className="bg-gray-800 p-4 rounded-lg shadow text-white">
            <p className="text-sm">Featured Car</p>
            <p className="font-semibold">Tesla Model S</p>
            <p className="text-xs">Starting at $79,990</p>
          </div>
          <Button
            variant="secondary"
            className="mt-4 px-4 py-6 text-black rounded-lg hover:bg-white"
          >
            View All Cars
          </Button>
        </div>
      </div>
    </div>
  );
}
