"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import React, { useState } from "react";
import { createJobApplication } from "@/lib/actions/job-applications";

interface CreateJobApplicationDialogProps {
columnId: string;
boardId: string;
}

const INITIAL_FORM_DATA = {
company: "",
position: "",
location: "",
notes: "",
salary: "",
jobUrl: "",
tags: "",
description: "",
};

export default function CreateJobApplicationDialog({
columnId,
boardId,
}: CreateJobApplicationDialogProps) {
const [open, setOpen] = useState<boolean>(false);
const [formData, setFormData] = useState(INITIAL_FORM_DATA);

async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
    const result = await createJobApplication({
        ...formData,
        columnId,
        boardId,
        tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    });

    if (!result.error) {
        setFormData(INITIAL_FORM_DATA);
        setOpen(false);
    }
    } catch (err) {
    console.error(err);
    }
}

return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
        <Button
        variant="outline"
        className="w-full mb-4 justify-start text-gray-600 
                    border-2 border-dashed border-gray-300
                    rounded-xl
                    hover:border-gray-400 hover:bg-gray-50
                    transition-all duration-200"
        >
        <Plus className="mr-2 h-4 w-4" />
        Add Job
        </Button>
    </DialogTrigger>

    <DialogContent className=" w-[95vw] 
    max-w-xl 
    max-h-[90vh] 
    overflow-y-auto
    rounded-2xl 
    bg-primary-hover
    shadow-xl 
    border border-gray-200
    p-6">
        <DialogHeader>
        <DialogTitle className="text-xl font-semibold text-primary">
            Add Job Application
        </DialogTitle>
        <DialogDescription className="text-gray-500">
            Track a new job opportunity
        </DialogDescription>
        </DialogHeader>

        <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
        <div className="space-y-6">

            {/* Company + Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="company" className="text-primary">
                  Company *
                </Label>
                <Input
                id="company"
                required
                className="rounded-xl bg-white border-gray-300 
                        focus:ring-2 focus:ring-emerald-300 
                        focus:border-emerald-400 transition"
                value={formData.company}
                onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                }
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="position" className="text-primary">
                  Position *
                </Label>
                <Input
                id="position"
                required
                className="rounded-xl bg-white border-gray-300 
                            focus:ring-2 focus:ring-emerald-300 
                            focus:border-emerald-400 transition"
                value={formData.position}
                onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                }
                />
            </div>
            </div>

            {/* Location + Salary */}
            <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="location" className="text-primary">
                Location
                </Label>
                <Input
                id="location"
                className="rounded-xl bg-white border-gray-300 
                            focus:ring-2 focus:ring-emerald-300 
                            focus:border-emerald-400 transition"
                value={formData.location}
                onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                }
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="salary" className="text-primary">
                Salary
                </Label>
                <Input
                id="salary"
                placeholder="e.g., $100k - $150k"
                className="rounded-xl bg-white border-gray-300 
                            focus:ring-2 focus:ring-emerald-300 
                            focus:border-emerald-400 transition"
                value={formData.salary}
                onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
                }
                />
            </div>
            </div>

            {/* URL */}
            <div className="space-y-2">
            <Label htmlFor="jobUrl" className="text-primary">
                Job URL
            </Label>
            <Input
                id="jobUrl"
                type="url"
                placeholder="https://..."
                className="rounded-xl bg-white border-gray-300 
                    focus:ring-2 focus:ring-emerald-300 
                    focus:border-emerald-400 transition"
                value={formData.jobUrl}
                onChange={(e) =>
                setFormData({ ...formData, jobUrl: e.target.value })
                }
            />
            </div>

            {/* Tags */}
            <div className="space-y-2">
            <Label htmlFor="tags" className="text-primary">
                Tags (comma-separated)
            </Label>
            <Input
                id="tags"
                placeholder="React, Remote, High Pay"
                className="rounded-xl bg-white border-gray-300 
                    focus:ring-2 focus:ring-emerald-300 
                    focus:border-emerald-400 transition"
                value={formData.tags}
                onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
                }
            />
            </div>

            {/* Description */}
            <div className="space-y-2">
            <Label htmlFor="description" className="text-primary">
                Description
            </Label>
            <Textarea
                id="description"
                rows={3}
                placeholder="Brief description of the role..."
                className="rounded-xl bg-white border-gray-300 
                        focus:ring-2 focus:ring-emerald-300 
                        focus:border-emerald-400 transition"
                value={formData.description}
                onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
                }
            />
            </div>

            {/* Notes */}
            <div className="space-y-2">
            <Label htmlFor="notes" className="text-primary">
                Notes
            </Label>
            <Textarea
                id="notes"
                rows={4}
                className="rounded-xl bg-white border-gray-300 
                        focus:ring-2 focus:ring-emerald-300 
                        focus:border-emerald-400 transition"
                value={formData.notes}
                onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
                }
            />
            </div>
        </div>

        <DialogFooter className="pt-4">
            <Button
            type="button"
            variant="outline"
            className="rounded-xl bg-white text-primary"
            onClick={() => setOpen(false)}
            >
            Cancel
            </Button>

            <Button
            type="submit"
            className="rounded-xl bg-primary hover:bg-grey text-white transition"
            >
            Add Application
            </Button>
        </DialogFooter>
        </form>
    </DialogContent>
    </Dialog>
);
}