import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const NewAlbumButton = () => (
  <Button asChild>
    <Link to="/new-album">
      <Plus className="mr-2 h-4 w-4" />
      Новый альбом
    </Link>
  </Button>
);

export default NewAlbumButton;