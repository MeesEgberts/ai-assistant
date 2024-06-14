"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MoveRight, PlusCircle } from "lucide-react";
import { useFormState } from "react-dom";
import { getFormProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { insertApiKeySchema } from "@/lib/validation/keys";
import { createApiKey } from "@/app/(dashboard)/keys/_lib/action";
import { SubmitButton } from "@/components/submit-button";
import { FormField } from "@/components/form-field";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Props {
  disabled: boolean;
}

export function AddApiKeyDialog({ disabled }: Props) {
  const [open, setOpen] = useState(false);

  const [state, action] = useFormState(createApiKey, undefined);

  const [form, fields] = useForm({
    lastResult: state,
    shouldRevalidate: "onInput",
    shouldValidate: "onBlur",
    constraint: getZodConstraint(insertApiKeySchema),
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: insertApiKeySchema });
    },
  });

  useEffect(() => {
    if (state?.status === "success") {
      toast.success("API key added successfully");
      setOpen(false);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button disabled={disabled}>
          Add API key
          <PlusCircle className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new API key</DialogTitle>
          <DialogDescription>
            Configure your API keys for different AI providers
          </DialogDescription>
        </DialogHeader>
        {form.errors?.map((error) => (
          <Alert key={error} variant="destructive">
            <AlertTriangle className="w-4 h-4" />
            <AlertTitle>Woops!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ))}
        <form className="grid gap-4" action={action} {...getFormProps(form)}>
          <FormField
            field={fields.key}
            label="Open AI API key"
            options={{ type: "password" }}
          />
          <DialogFooter className="border-t pt-4">
            <SubmitButton label="Add API key" icon={MoveRight} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
