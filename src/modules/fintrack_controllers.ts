import { RequestHandler } from 'express';

import { Fintrack } from './fintrack_models';

const FINTRACKS: Fintrack[] = [];

export const createFintrack: RequestHandler = (req, res, next) => {
  const type = (req.body as { type: string }).type;
  const name = (req.body as { name: string }).name;
  const detail = (req.body as { detail: string }).detail;
  const amount = (req.body as { amount: string }).amount;
  const newFintrack = new Fintrack(Math.random().toString(), type, name, detail, amount);

  FINTRACKS.push(newFintrack);

  res.status(201).json({ message: 'Created the Financial Tracking.', createdFintrack: newFintrack });
};

export const getFintracks: RequestHandler = (req, res, next) => {
  res.json({ fintrack: FINTRACKS });
};

export const updateFintrack: RequestHandler<{ id: string }> = (req, res, next) => {
  const fintrackId = req.params.id;

  const updatedType = (req.body as { type: string }).type;

  const updatedName = (req.body as { name: string }).name;

  const updatedDetail = (req.body as { detail: string }).detail;

  const updatedAmount = (req.body as { amount: string }).amount;

  const fintrackIndex = FINTRACKS.findIndex(fintrack => fintrack.id === fintrackId);

  if (fintrackIndex < 0) {
    throw new Error('Could not find financial tracking!');
  }

  FINTRACKS[fintrackIndex] = new Fintrack(FINTRACKS[fintrackIndex].id, updatedType, updatedName, updatedDetail, updatedAmount);

  res.json({ message: 'Updated!', updatedFintrack: FINTRACKS[fintrackIndex] });
};

export const deleteFintrack: RequestHandler = (req, res, next) => {
  const fintrackId = req.params.id;

  const fintrackIndex = FINTRACKS.findIndex(fintrack => fintrack.id === fintrackId);

  if (fintrackIndex < 0) {
    throw new Error('Could not find financial tracking!');
  }

  FINTRACKS.splice(fintrackIndex, 1);

  res.json({ message: 'Financial tracking deleted!' });
};
