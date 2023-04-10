const APIConsumer = artifacts.require('APIConsumer');

contract('APIConsumer', () => {
  let apiConsumer;

  before(async () => {
    apiConsumer = await APIConsumer.new();
  });

  it('should request and fulfill volume data', async () => {
    const requestId = await apiConsumer.requestVolumeData();
    assert(requestId, 'Request ID should be truthy');

    const tx = await apiConsumer.fulfill(requestId, 1000);
    assert(tx.receipt.status, 'Transaction should be successful');

    const volume = await apiConsumer.volume();
    assert.equal(volume, 1000, 'Volume should match fulfilled value');
  });
});
