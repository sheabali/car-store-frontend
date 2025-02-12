import { Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type AFormProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
};

const AInput = ({ type, name, label, disabled }: AFormProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <div className="flex flex-col space-y-2">
          {label && <Label htmlFor={name}>{label}</Label>}
          <Input {...field} type={type} id={name} disabled={disabled} />
        </div>
      )}
    />
  );
};

export default AInput;
