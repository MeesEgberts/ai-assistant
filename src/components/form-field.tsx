import { FieldMetadata, getInputProps } from "@conform-to/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Props {
  field: FieldMetadata;
  label: string;
  options: Parameters<typeof getInputProps>[1];
}

export function FormField({ field, label, options }: Props) {
  return (
    <div className="grid gap-2">
      <Label
        className={cn(field.errors && "text-destructive")}
        htmlFor={field.id}
      >
        {label}
      </Label>
      <Input {...getInputProps(field, options)} />
      <div id={field.errorId} className="grid gap-1">
        {field.errors?.map((error) => (
          <div
            key={error}
            className="text-destructive text-[0.8rem] font-medium"
          >
            {error}
          </div>
        ))}
      </div>
    </div>
  );
}
