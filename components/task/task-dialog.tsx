import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { useTaskForm } from "@/hooks/useTaskForm";
import { Task } from "@/types/task";
import { DialogClose } from "@radix-ui/react-dialog";
import { Toggle } from "../toggle";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";


type TaskDialogProps = {
    initialData?: Task | null
}

const TaskDialog = ({ initialData }: TaskDialogProps) => {
    const { toast } = useToast()
    const router = useRouter()

    const { loading, form, submit, deleteTask } = useTaskForm({
        initialData,
        onSubmitSuccess: () => {
            router.refresh()
            form.reset()
            toast({
                title: "Task saved!."
            })
        },
    });

    const addOrEditMessage = initialData ? 'Edit' : 'Add';

    const descMessage = `You can ${addOrEditMessage} a task here. Click save when you're done.`;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{addOrEditMessage} Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{addOrEditMessage} Task</DialogTitle>
                    <DialogDescription>
                        {descMessage}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submit)}>
                        <div className="grid gap-4 py-4">

                            <FormField name='title' control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="title" className="text-right">
                                        Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading} placeholder='Task title...' {...field}
                                            className="col-span-3"
                                        />
                                    </FormControl>

                                </FormItem>
                            )} />
                            <FormField name='description' control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="description" className="text-right">
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder='Task description...' {...field}
                                            className="col-span-3"
                                        />
                                    </FormControl>

                                </FormItem>
                            )} />
                            <FormField name='completed' control={form.control} render={({ field }) => (
                                <FormItem>
                                    <Toggle
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="text-right"
                                    />
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                        <DialogClose>
                            <DialogFooter className="flex flex-row">
                                <Button type="submit" disabled={loading} className="mb-2 sm:mb-0 sm:mr-2">
                                    <span className="text-xs">
                                        Save changes
                                    </span>
                                </Button>
                                <Button
                                    variant={"destructive"}
                                    onClick={deleteTask}
                                    className="w-full sm:w-[130px]"
                                >
                                    <span className="text-xs">
                                        Delete
                                    </span>
                                </Button>
                            </DialogFooter>
                        </DialogClose>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}

export default TaskDialog;