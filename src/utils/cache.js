import { useState } from "react";

export function saveDestination(destination) {
  try {
    let data = JSON.parse(localStorage.getItem("Saved"));
    let saved = [];
    if (data) {
      data.forEach((element) => {
        saved.push(element);
      });
    }
    saved.push(destination);

    localStorage.setItem("Saved", JSON.stringify(saved));
  } catch (error) {
    console.log("Error: ");
    console.error(error);
  }
}

export function getSavedDestinations() {
  try {
    const savedList = localStorage.getItem("Saved");
    return savedList ? JSON.parse(savedList) : [];
  } catch (e) {
    console.error("Error: ", e);
  }
}

export function removeSavedDestinaion(destination) {
  try {
    const savedDestinations = JSON.parse(localStorage.getItem("Saved"));
    const remainingDestinations = savedDestinations.filter(
      (savedDestination) => savedDestination.name != destination.name,
    );
    localStorage.setItem("Saved", JSON.stringify(remainingDestinations));
  } catch (e) {
    console.error(e);
  }
}
