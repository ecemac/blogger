import { handleSubmission } from "@/app/actions";
import { prisma } from "@/app/utils/db";
import { SubmitButton } from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

type Params = { id: string };

export default async function EditBlog({ params }: { params: Params }) {
  const { id } = params;
  const data = await getData(id);

  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Edit Post</CardTitle>
          <CardDescription>Edit your existing post</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmission} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input
                name="title"
                required
                type="text"
                placeholder="Title"
                defaultValue={data.title}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea
                name="content"
                required
                placeholder="Content"
                defaultValue={data.content}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input
                name="url"
                required
                type="url"
                placeholder="Image URL"
                defaultValue={data.imageUrl}
              />
            </div>
            <Input type="hidden" name="id" value={data.id} />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
