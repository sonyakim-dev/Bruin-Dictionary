import { Modal, ModalContent, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import useDeleteEntry from '../../../utils/useDeleteEntry';

const DeleteConfirmModal = ({ entryid, isOpen, onOpenChange }) => {
  const deletion = useDeleteEntry(entryid);

  const handleDelete = () => {
    deletion.mutate();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="dark:dark p-3 w-fit"
      classNames={{ wrapper: 'items-center', backdrop: 'w-full h-full' }}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="m-2">
              <p>Are you sure you want to delete this item?</p>
            </ModalBody>
            <ModalFooter className="p-0">
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  handleDelete();
                  onClose();
                }}>
                Yes
              </Button>
              <Button color="primary" variant="light" onPress={onClose}>
                No
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteConfirmModal;
