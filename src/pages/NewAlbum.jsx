import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLogin } from "../services/AuthContext";
import { createAlbum } from "../services/album_service"; // импортируем функцию

const NewAlbum = () => {
  const { login } = useLogin(); // предполагается, что jwt доступен через useLogin
  const [form, setForm] = useState({
    title: "",
    start_date: "",
    end_date: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      await createAlbum(form, login.jwt); 
      setSuccess(true);
      setForm({
        title: "",
        start_date: "",
        end_date: "",
        description: "",
      });
    } catch (err) {
      setError("Ошибка при создании альбома");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4 max-w-md mx-auto mt-8 p-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Создать новый альбом</h2>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">Альбом успешно создан!</div>}
      <div>
        <Label className="mb-2" htmlFor="title">Название альбома</Label>
        <Input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="start_date">Дата начала</Label>
        <Input
          id="start_date"
          name="start_date"
          type="date"
          value={form.start_date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="end_date">Дата окончания</Label>
        <Input
          id="end_date"
          name="end_date"
          type="date"
          value={form.end_date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Описание (необязательно)</Label>
        <Textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Описание альбома"
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Создание..." : "Создать"}
      </Button>
    </form>
  );
};

export default NewAlbum;