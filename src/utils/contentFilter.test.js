import { filterItemsByKind } from './contenFilter';

describe('contentFilter', () => {
  test('Contentfilter works for Video kind', () => {
    const mockedData = [
      { id: { kind: 'youtube#video' } },
      { id: { kind: 'youtube#channel' } },
    ];
    const results = filterItemsByKind(mockedData, 'video');
    expect(results).toEqual([{ id: { kind: 'youtube#video' } }]);
  });
  test('Contentfilter works for channels kind ', () => {
    const mockedData = [
      { id: { kind: 'youtube#video' } },
      { id: { kind: 'youtube#channel' } },
    ];
    const results = filterItemsByKind(mockedData, 'channel');
    expect(results).toEqual([{ id: { kind: 'youtube#channel' } }]);
  });
  test('Contentfilter works for none kind', () => {
    const mockedData = [
      { id: { kind: 'youtube#video' } },
      { id: { kind: 'youtube#channel' } },
    ];
    const results = filterItemsByKind(mockedData, 'none');
    expect(results).toEqual(mockedData);
  });
});
