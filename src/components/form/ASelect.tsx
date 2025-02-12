import { Controller } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

type TPHSelectProps = {
  label: string;
  name: string;
  disabled?: boolean;
  mode?: 'multiple';
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
};

const ASelect = ({ label, name, options, disabled }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <FormField
          name={name}
          render={() => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={disabled}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {options?.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    />
  );
};

export default ASelect;
