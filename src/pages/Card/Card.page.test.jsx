import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card Component tests', () => {
    it('Card Description defined', () => {
        render(
            <Card
                image="testimage"
                title="testTitle"
                description="testDescription"
                width="120"
                height="90"
            />
        );
        expect(screen.getByText('testDescription')).toBeDefined();
    });

    it('Card Title defined', () => {
        render(
            <Card
                image="testimage"
                title="testTitle"
                description="testDescription"
                width="120"
                height="90"
            />
        );
        expect(screen.getByText('testTitle')).toBeDefined();
    });

    it('Card Title type', () => {
        render(
            <Card
                image="testimage"
                title="testTitle"
                description="testDescription"
                width="120"
                height="90"
            />
        );
        expect(screen.getByText('testTitle').tagName).toBe('H2');
    });

    it('Card Description type', () => {
        render(
            <Card
                image="testimage"
                title="testTitle"
                description="testDescription"
                width="120"
                height="90"
            />
        );
        expect(screen.getByText('testDescription').tagName).toBe('P');
    });

    it('Card Description class', () => {
        render(
            <Card
                image="testimage"
                title="testTitle"
                description="testDescription"
                width="120"
                height="90"
            />
        );
        expect(screen.getByText('testDescription').classList).toHaveLength(0);
    });

    it('Card Title class', () => {
        render(
            <Card
                image="testimage"
                title="testTitle"
                description="testDescription"
                width="120"
                height="90"
            />
        );
        expect(screen.getByText('testTitle').classList).toHaveLength(0);
    });
});
