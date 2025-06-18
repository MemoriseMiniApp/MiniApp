import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const NewAlbumButton = () => (
  <div className="flex justify-center items-center w-full">
    <Button asChild className="rounded-2xl">
      <Link to="/new-album">
        <Plus className="mr-2 h-4 w-4" />
        Новый альбом
      </Link>
    </Button>
  </div>
);

export default NewAlbumButton;