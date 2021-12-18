import React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Info Page</p>


      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >

        <TreeItem nodeId="1" label="Directory A">
          <TreeItem nodeId="2" label="Folder A"> 
            <TreeItem nodeId="3" label="File A1"/> 
            <TreeItem nodeId="4" label="File A2"/> 
            <TreeItem nodeId="5" label="File A3"/> 
          </TreeItem>
          <TreeItem nodeId="6" label="Folder B"> 
            <TreeItem nodeId="7" label="File B1"/> 
            <TreeItem nodeId="8" label="File B2"/> 
          </TreeItem>
        </TreeItem>

        <TreeItem nodeId="9" label="Directory B">
          <TreeItem nodeId="10" label="Folder A"> 
            <TreeItem nodeId="11" label="File A1"/> 
          </TreeItem>
          <TreeItem nodeId="12" label="Folder B"> 
            <TreeItem nodeId="13" label="File B1"/> 
            <TreeItem nodeId="14" label="File B2"/> 
          </TreeItem>
          <TreeItem nodeId="15" label="Folder C"> 
            <TreeItem nodeId="16" label="File C1"/> 
            <TreeItem nodeId="17" label="File C2"/> 
            <TreeItem nodeId="18" label="File C3"/> 
            <TreeItem nodeId="19" label="File C4"/> 
            <TreeItem nodeId="20" label="File C5"/> 
            <TreeItem nodeId="21" label="File C6"/> 
          </TreeItem>
        </TreeItem>

        <TreeItem nodeId="21" label="Directory C">
          <TreeItem nodeId="22" label="Folder A"> 
            <TreeItem nodeId="23" label="File A1"/> 
            <TreeItem nodeId="24" label="File A2"/> 
            <TreeItem nodeId="25" label="File A3"/> 
            <TreeItem nodeId="26" label="File A4"/>
          </TreeItem>
        </TreeItem>
        
      </TreeView>


    </div>
  );
}

export default InfoPage;
