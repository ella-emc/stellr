import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

// Replace later with actual astronomy interests options from database
import topics from "@/app/data/astronomy-topics.json";

type SignUpForm3Props = {
  step: number;
  setStep: (step: number) => void;
}

export default function SignUpForm1({
  step,
  setStep
}: SignUpForm3Props) {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();

  // State to handle topic selection
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  
  // State to display modal warning when more than 5 topics are selected
  const [displayWarning, setDisplayWarning] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    // Submission logic goes here
  };

  const handleTopicSelection = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      // If already selected, remove it
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      // If not selected, add it
      if (selectedTopics.length < 5) {
        setSelectedTopics([...selectedTopics, topic]);
        console.log("Selected topics:", [...selectedTopics, topic]);
      } else {
        console.log("Maximum of 5 interests only.");
        setDisplayWarning(true);
      }
    }
  }

  return (
    <View className="flex-col gap-y-4">
      <Text className="text-text font-dm-sans">Select at most 5 astronomy things that interest you</Text>

      <View className="flex flex-row flex-wrap gap-x-2 gap-y-4">
        {
          topics.map((topic, index) => (
            <Pressable
              key={index}
              className={`
                ${selectedTopics.includes(topic.label) ? "bg-primary" : "bg-backgroundLight"}
                py-3 px-5 rounded-3xl
              `}
              onPress={() => handleTopicSelection(topic.label)}
            >
              <Text className={`${selectedTopics.includes(topic.label) ? "text-background" : "text-text"} font-dm-sans`}>{topic.name.toLowerCase()}</Text>
            </Pressable>
          ))
        }
      </View>

      <View className="flex flex-row justify-between">
        <Pressable
          className="flex w-1/3 self-end items-center justify-center border-2 border-accent p-4 rounded-xl font-dm-sans mt-4"
          onPress={() => setStep(step - 1)}
        >
          <Text className="text-accent font-sora-bold">Back</Text>
        </Pressable>
        <Pressable
          className="flex w-1/3 self-end items-center justify-center border-2 border-accent p-4 rounded-xl font-dm-sans mt-4"
          onPress={() => setStep(step + 1)}
        >
          <Text className="text-accent font-sora-bold">Next</Text>
        </Pressable>
      </View>
    </View>
  )
}